import React from "react";
import withPermission from '../HOC/withPermissions';

const Message2 = () => <p>Hello User</p>;

export default withPermission(Message2, 'user');
