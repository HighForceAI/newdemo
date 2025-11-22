// Teams page mock data

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  teams: string[]; // team IDs
  avatar?: string;
}

export interface Team {
  id: string;
  name: string;
  managerId: string;
  memberIds: string[];
  description?: string;
}

// Mock users for Summit Strategy Consulting
export const mockUsers: User[] = [
  {
    id: 'user_001',
    name: 'Demo',
    email: 'demo@summitconsulting.com',
    role: 'admin',
    teams: []
  },
  {
    id: 'user_002',
    name: 'Jennifer Martinez',
    email: 'jennifer@summitconsulting.com',
    role: 'manager',
    teams: ['team_001', 'team_002']
  },
  {
    id: 'user_003',
    name: 'Alex Kumar',
    email: 'alex@summitconsulting.com',
    role: 'manager',
    teams: ['team_002']
  },
  {
    id: 'user_004',
    name: 'Maria Santos',
    email: 'maria@summitconsulting.com',
    role: 'employee',
    teams: ['team_002', 'team_003']
  },
  {
    id: 'user_005',
    name: 'Robert Kim',
    email: 'robert@summitconsulting.com',
    role: 'employee',
    teams: ['team_001', 'team_003']
  },
  {
    id: 'user_006',
    name: 'Sarah Chen',
    email: 'sarah@summitconsulting.com',
    role: 'employee',
    teams: ['team_001']
  },
  {
    id: 'user_007',
    name: 'Michael Torres',
    email: 'michael@summitconsulting.com',
    role: 'employee',
    teams: ['team_003']
  }
];

// Mock teams
export const mockTeams: Team[] = [
  {
    id: 'team_001',
    name: 'Sales Team',
    managerId: 'user_002', // Jennifer
    memberIds: ['user_002', 'user_005', 'user_006'],
    description: 'Client acquisition and business development'
  },
  {
    id: 'team_002',
    name: 'Delivery Team',
    managerId: 'user_003', // Alex
    memberIds: ['user_003', 'user_002', 'user_004'],
    description: 'Project delivery and client success'
  },
  {
    id: 'team_003',
    name: 'Marketing Team',
    managerId: 'user_005', // Robert
    memberIds: ['user_005', 'user_004', 'user_007'],
    description: 'Content creation and lead generation'
  }
];

// Helper functions
export const getUserById = (id: string) => mockUsers.find(u => u.id === id);
export const getTeamById = (id: string) => mockTeams.find(t => t.id === id);
export const getUsersByTeam = (teamId: string) => mockUsers.filter(u => u.teams.includes(teamId));
export const getTeamsByUser = (userId: string) => {
  const user = getUserById(userId);
  return user ? mockTeams.filter(t => user.teams.includes(t.id)) : [];
};
