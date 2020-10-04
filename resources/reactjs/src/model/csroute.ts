import React from "react";
import {RouteComponentProps} from "react-router";

export interface CSRoute {
    path: string;
    name: string;
    icon: React.ReactElement;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    divider?: boolean;
}
