import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 125px;
    height: 125px;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  height: 90%;
  margin-left: 10%;
`;

const Avatar = (props) => {
  return (
    <Container>
      <AvatarImage src="https://static.onecms.io/wp-content/uploads/sites/37/2016/05/15233355/zz-plant_AdobeStock_213696329_0.jpg" />
    </Container>
  );
};

export default Avatar;