import useAuth from '../Hooks/useAuth';
import useAxiosSecure from'../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: googleRole = '', isLoading: googleLoading } = useQuery({
    queryKey: ['googleRole', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/googleUsers/${user?.email}`);
      return data.role;
    },
  });

  // Return user roles and loading states
  return [googleRole , googleLoading];
};

export default useRole;
