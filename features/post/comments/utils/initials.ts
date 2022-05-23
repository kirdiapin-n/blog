export const getInitials = (name: string) =>
    name
        .split(' ')
        .map(value => value.charAt(0).toUpperCase())
        .join('');
