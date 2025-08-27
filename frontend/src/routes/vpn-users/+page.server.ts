import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface MatrixUser {
  username: string;
  email: string;
  status: string;
  createdAt: string;
}

interface DatabaseUser {
  username: string;
  database: string;
  privileges: string;
  createdAt: string;
}

export const load: PageServerLoad = async ({ locals }) => {
  try {
    // TODO: Implement actual API calls to fetch VPN users
    const matrixUsers: MatrixUser[] = [];
    const databaseUsers: DatabaseUser[] = [];

    return {
      matrixUsers,
      databaseUsers
    };
  } catch (e) {
    throw error(500, 'Failed to load VPN users');
  }
}; 