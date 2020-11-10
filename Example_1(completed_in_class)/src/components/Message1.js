import React from "react";
import withPermission from '../HOC/withPermissions';

const Message1 = () => <p>Hello Admin</p>;

export default withPermission(Message1, 'admin');
