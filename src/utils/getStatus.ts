export const getStatusClass = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'badge badge--active';
    case 'inactive':
      return 'badge badge--inactive';
    case 'pending':
      return 'badge badge--pending';
    case 'blacklisted':
      return 'badge badge--blacklisted';
    default:
      return 'badge';
  }
};
