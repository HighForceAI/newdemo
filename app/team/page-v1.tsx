'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/auth-context';
import Sidebar from '@/components/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Plus, Users as UsersIcon, Mail } from 'lucide-react';
import { mockUsers, mockTeams, getUserById, getTeamById } from '@/lib/teams-data';

export default function TeamPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState(mockUsers);
  const [teams, setTeams] = useState(mockTeams);
  const [createTeamOpen, setCreateTeamOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');
  const [newTeamDescription, setNewTeamDescription] = useState('');
  const [selectedManager, setSelectedManager] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-50 text-red-700 border-red-200';
      case 'manager': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'employee': return 'bg-gray-50 text-gray-700 border-gray-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // Handler functions
  const handleCreateTeam = () => {
    if (!newTeamName.trim() || !selectedManager) return;

    const newTeam = {
      id: `team_${Date.now()}`,
      name: newTeamName,
      managerId: selectedManager,
      memberIds: [selectedManager, ...selectedMembers],
      description: newTeamDescription || `${newTeamName} department`
    };

    setTeams([...teams, newTeam]);

    // Add team to selected users
    const updatedUsers = users.map(u => {
      if (newTeam.memberIds.includes(u.id)) {
        return { ...u, teams: [...u.teams, newTeam.id] };
      }
      return u;
    });
    setUsers(updatedUsers);

    // Reset form
    setNewTeamName('');
    setNewTeamDescription('');
    setSelectedManager('');
    setSelectedMembers([]);
    setCreateTeamOpen(false);
  };

  const handleChangeRole = (userId: string, newRole: 'admin' | 'manager' | 'employee') => {
    setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
  };

  const handleToggleTeam = (userId: string, teamId: string) => {
    setUsers(users.map(u => {
      if (u.id === userId) {
        const hasTeam = u.teams.includes(teamId);
        return {
          ...u,
          teams: hasTeam
            ? u.teams.filter(t => t !== teamId)
            : [...u.teams, teamId]
        };
      }
      return u;
    }));

    // Also update team memberIds
    setTeams(teams.map(t => {
      if (t.id === teamId) {
        const hasMember = t.memberIds.includes(userId);
        return {
          ...t,
          memberIds: hasMember
            ? t.memberIds.filter(m => m !== userId)
            : [...t.memberIds, userId]
        };
      }
      return t;
    }));
  };

  const handleDeleteTeam = (teamId: string) => {
    setTeams(teams.filter(t => t.id !== teamId));
    setUsers(users.map(u => ({
      ...u,
      teams: u.teams.filter(t => t !== teamId)
    })));
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="p-6">
        <div className="rounded-3xl" style={{ height: 'calc(100vh - 48px)', backgroundColor: '#E3E4EA', boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.08)', overflow: 'hidden' }}>
          <Sidebar user={user} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8 pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-normal text-gray-900">Team Management</h1>
              <p className="text-sm text-gray-400 font-light mt-2">Manage users, roles, and team assignments</p>
            </div>

            <Dialog open={createTeamOpen} onOpenChange={setCreateTeamOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2" style={{ backgroundColor: '#2c8492' }}>
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

            {/* All Users Tab */}
            <TabsContent value="users" className="space-y-4 mt-6">
              {users.map((u) => {
                const userTeams = teams.filter(t => u.teams.includes(t.id));
                return (
                  <div key={u.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(44, 132, 146, 0.4)' }}>
                          <span className="text-gray-900 font-medium">{u.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{u.name}</h3>
                          <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                            <Mail className="h-3 w-3" />
                            {u.email}
                          </p>
                          <div className="flex items-center gap-3 mt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">Role:</span>
                              <Badge variant="outline" className={getRoleBadgeColor(u.role)}>
                                {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                              </Badge>
                            </div>
                            {userTeams.length > 0 && (
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Teams:</span>
                                <div className="flex gap-2">
                                  {userTeams.map(team => (
                                    <Badge key={team.id} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                      {team.name}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-2">
                              Edit Role
                              <ChevronDown className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'admin')}>
                              {u.role === 'admin' ? '✓ ' : ''}Admin
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'manager')}>
                              {u.role === 'manager' ? '✓ ' : ''}Manager
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleChangeRole(u.id, 'employee')}>
                              {u.role === 'employee' ? '✓ ' : ''}Employee
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-2">
                              Manage Teams
                              <ChevronDown className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {teams.map(team => (
                              <DropdownMenuItem key={team.id} onClick={() => handleToggleTeam(u.id, team.id)}>
                                {u.teams.includes(team.id) ? '✓ ' : ''}{team.name}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            {/* Teams Tab */}
            <TabsContent value="teams" className="space-y-4 mt-6">
              {teams.map((team) => {
                const manager = users.find(u => u.id === team.managerId);
                const members = users.filter(u => team.memberIds.includes(u.id));
                return (
                  <div key={team.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <UsersIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{team.description}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">Manager:</span>
                              <span className="text-sm font-medium text-gray-900">{manager?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{members.length} members</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {members.slice(0, 5).map(member => (
                              <Badge key={member.id} variant="outline" className="bg-gray-50">
                                {member.name}
                              </Badge>
                            ))}
                            {members.length > 5 && (
                              <Badge variant="outline" className="bg-gray-50">
                                +{members.length - 5} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-2">
                            Edit
                            <ChevronDown className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Change Manager</DropdownMenuItem>
                          <DropdownMenuItem>Edit Members</DropdownMenuItem>
                          <DropdownMenuItem>Rename Team</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => handleDeleteTeam(team.id)}>
                            Delete Team
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
