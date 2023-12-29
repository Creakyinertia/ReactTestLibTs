import { render, screen, act } from '@testing-library/react';
import UserList from './UserList';

(global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }]),
  })
);

describe('UserList component', () => {
  it('renders user list', async () => {
    render(<UserList />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(screen.getByText('User List')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
  });
});
