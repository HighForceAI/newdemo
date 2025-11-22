'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/auth-context';
import Sidebar from '@/components/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MoreVertical, Plus } from 'lucide-react';
import { mockUsers, mockTeams } from '@/lib/teams-data';

export default function TeamPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState(mockUsers);
  const [teams, setTeams] = useState(mockTeams);
  const [createTeamOpen, setCreateTeamOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDescription, setNewTeamDescription] = useState('');
  const [selectedManager, setSelectedManager] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handler functions
  const handleCreateTeam = () => {
    if (!newTeamName.trim() || !selectedManager) return;

    const newTeam = {
      id: `team_${Date.now()}`,
      name: newTeamName,
      managerId: selectedManager,
      memberIds: [selectedManager],
      description: newTeamDescription || `${newTeamName} department`
    };

    setTeams([...teams, newTeam]);
    setUsers(users.map(u =>
      u.id === selectedManager ? { ...u, teams: [...u.teams, newTeam.id] } : u
    ));

    setNewTeamName('');
    setNewTeamDescription('');
    setSelectedManager('');
    setCreateTeamOpen(false);
  };

  const handleChangeRole = (userId: string, newRole: 'admin' | 'manager' | 'employee') => {
    setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
  };

  const handleToggleTeam = (userId: string, teamId: string) => {
    setUsers(users.map(u => {
      if (u.id === userId) {
        const hasTeam = u.teams.includes(teamId);
        return { ...u, teams: hasTeam ? u.teams.filter(t => t !== teamId) : [...u.teams, teamId] };
      }
      return u;
    }));

    setTeams(teams.map(t => {
      if (t.id === teamId) {
        const hasMember = t.memberIds.includes(userId);
        return { ...t, memberIds: hasMember ? t.memberIds.filter(m => m !== userId) : [...t.memberIds, userId] };
      }
      return t;
    }));
  };

  const handleDeleteTeam = (teamId: string) => {
    setTeams(teams.filter(t => t.id !== teamId));
    setUsers(users.map(u => ({ ...u, teams: u.teams.filter(t => t !== teamId) })));
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-white z-50" />
      )}

      {/* Sidebar - no animation */}
      <div className="p-6">
        <div className="rounded-3xl" style={{ height: 'calc(100vh - 48px)', backgroundColor: '#E3E4EA', boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
          <Sidebar user={user} />
        </div>
      </div>

      {/* Main content with fade-in */}
      <div className={`flex-1 overflow-y-auto p-8 pt-12 transition-opacity duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto" style={{ minWidth: '900px' }}>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-normal text-gray-900">Team Management</h1>
              <p className="text-base text-gray-400 font-light mt-2">Manage users, roles, and team assignments</p>
            </div>

            <Dialog open={createTeamOpen} onOpenChange={setCreateTeamOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2" style={{ backgroundColor: '#2c8492' }}>
                  <Plus className="h-4 w-4" />
                  Create Team
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Team</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <Label>Team Name</Label>
                    <Input
                      placeholder="e.g., Sales Team"
                      value={newTeamName}
                      onChange={(e) => setNewTeamName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Description (optional)</Label>
                    <Input
                      placeholder="Brief description"
                      value={newTeamDescription}
                      onChange={(e) => setNewTeamDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Select Manager</Label>
                    <Select value={selectedManager} onValueChange={setSelectedManager}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a manager..." />
                      </SelectTrigger>
                      <SelectContent>
                        {users.filter(u => u.role === 'manager' || u.role === 'admin').map(u => (
                          <SelectItem key={u.id} value={u.id}>{u.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setCreateTeamOpen(false)}>Cancel</Button>
                  <Button style={{ backgroundColor: '#2c8492' }} onClick={handleCreateTeam}>Create Team</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="users" className="w-full">
            <TabsList>
              <TabsTrigger value="users">All Users</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>

            {/* All Users Tab - Table Layout */}
            <TabsContent value="users" className="mt-6">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ backgroundColor: 'rgba(44, 132, 146, 0.25)' }}>
                  <div className="col-span-4">Name</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-5">Teams</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* Rows */}
                {users.map((u, idx) => {
                  const userTeams = teams.filter(t => u.teams.includes(t.id));
                  return (
                    <div
                      key={u.id}
                      className="grid grid-cols-12 gap-4 px-6 py-6 border-t border-gray-100 hover:bg-blue-50 transition-colors group"
                      style={{ '--hover-glow': 'rgba(44, 132, 146, 0.05)' } as any}
                    >
                      {/* Name & Email */}
                      <div className="col-span-4 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2c8492' }}>
                          <span className="text-sm font-medium text-white">{u.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{u.name}</p>
                          <p className="text-xs text-gray-500">{u.email}</p>
                        </div>
                      </div>

                      {/* Role */}
                      <div className="col-span-2 flex items-center">
                        <span className="text-sm text-gray-700 capitalize">{u.role}</span>
                      </div>

                      {/* Teams */}
                      <div className="col-span-5 flex items-center">
                        {userTeams.length > 0 ? (
                          <div className="flex items-center gap-2">
                            {userTeams.map((team, idx) => (
                              <div key={team.id} className="flex items-center gap-2">
                                <span className="text-sm text-gray-700">{team.name}</span>
                                {idx < userTeams.length - 1 && (
                                  <div className="w-px h-4 bg-gray-300"></div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">N/A</span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="col-span-1 flex items-center justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="lg" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4 text-gray-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-auto">
                            <div className="flex gap-4 p-2">
                              {/* Left Column - Change Role */}
                              <div className="min-w-[120px]">
                                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500">Change Role</div>
                                <div className="space-y-1">
                                  <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'admin')}>
                                    {u.role === 'admin' ? '✓ ' : ''}Admin
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'manager')}>
                                    {u.role === 'manager' ? '✓ ' : ''}Manager
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'employee')}>
                                    {u.role === 'employee' ? '✓ ' : ''}Employee
                                  </DropdownMenuItem>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="w-px bg-gray-200"></div>

                              {/* Right Column - Manage Teams */}
                              <div className="min-w-[140px]">
                                <div className="px-2 py-1.5 text-xs font-semibold text-gray-500">Manage Teams</div>
                                <div className="space-y-1">
                                  {teams.map(team => (
                                    <DropdownMenuItem key={team.id} onClick={() => handleToggleTeam(u.id, team.id)}>
                                      {u.teams.includes(team.id) ? '✓ ' : ''}{team.name}
                                    </DropdownMenuItem>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Teams Tab - Table Layout */}
            <TabsContent value="teams" className="mt-6">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ backgroundColor: 'rgba(44, 132, 146, 0.25)' }}>
                  <div className="col-span-3">Team Name</div>
                  <div className="col-span-2">Manager</div>
                  <div className="col-span-6">Members</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>

                {/* Rows */}
                {teams.map((team) => {
                  const manager = users.find(u => u.id === team.managerId);
                  const members = users.filter(u => team.memberIds.includes(u.id));
                  return (
                    <div
                      key={team.id}
                      className="grid grid-cols-12 gap-4 px-6 py-6 border-t border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      {/* Team Name */}
                      <div className="col-span-3 flex flex-col justify-center">
                        <p className="text-sm font-medium text-gray-900">{team.name}</p>
                        {team.description && (
                          <p className="text-xs text-gray-500 mt-0.5">{team.description}</p>
                        )}
                      </div>

                      {/* Manager */}
                      <div className="col-span-2 flex items-center">
                        <span className="text-sm text-gray-700">{manager?.name || 'Unassigned'}</span>
                      </div>

                      {/* Members */}
                      <div className="col-span-6 flex items-center">
                        <div className="flex flex-wrap gap-1.5">
                          {members.slice(0, 4).map(member => (
                            <span key={member.id} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                              {member.name}
                            </span>
                          ))}
                          {members.length > 4 && (
                            <span className="text-xs text-gray-500">+{members.length - 4} more</span>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="col-span-1 flex items-center justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="lg" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4 text-gray-400" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Change Manager</DropdownMenuItem>
                            <DropdownMenuItem>Edit Members</DropdownMenuItem>
                            <DropdownMenuItem>Rename Team</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteTeam(team.id)}>
                              Delete Team
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
