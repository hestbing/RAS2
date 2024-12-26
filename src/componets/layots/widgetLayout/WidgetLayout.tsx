import { FC } from "react";
import { WidgetLayoutProps } from "./WidgetLayoutProps";
import "./WidgetLayoutStyles.scss"

export const WidgetLayout: FC<WidgetLayoutProps> = props => {
    const{
        children
    }= props;

    return(
        <div className="widget-layout">
            {children}
        </div>
    );
}