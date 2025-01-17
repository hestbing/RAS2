import { FC } from "react";
import { LayoutProps } from "./LayoutProps";
import "./LayoutStyles.scss"
import { LogoIcon } from "../../../assets";
import { UserMenu } from "../../userMenu";

export const Layout: FC<LayoutProps> = props => {
    const{footer, headerChild, title, children} = props;
        

    return(
        <div className="layout">
            <div className="layout__header">
                <div>
                    <LogoIcon/>
                </div>
                <div>
                    <div>{title ?? 'База учета посещаемости студентов'}</div>
                    <div>{headerChild}</div>
                </div>
                <div className="layout__user-menu">
                    <UserMenu items={[{
                        id: 'go_to_profile',
                        action: () =>{},
                        label: 'Перейти в профиль'
                    },{
                        id: 'exit',
                        action: () => {},
                        label: 'Выйти',
                    }]}/>
                </div>
            </div>
            <div className="layout__body">
                {children}
            </div>
            <div>{footer}</div>
        </div>
    );
}