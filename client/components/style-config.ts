export const COLORS = {
  darkGray: '#767474',
  darkGreen: '#076942',
  lightGray: '#999999',
  primaryGreen: '#419D78',
  fadedPrimaryGreen: '#b8e0d1',
  notification: 'rgba(255, 0, 0, .7)',
  white: 'white',
};
export const TILE_HEIGHT = 80;

export const FONT_STYLES = {
  primary: 'Montserrat',
};

export const getBaseModalStyle = () => {
  const leftPart = screen.width >= 768 ? { left: '33%' } : {};
  return {
    CONTENT: { ...leftPart, width: '50%', minWidth: '300px', maxWidth: '500px' },
  };
};