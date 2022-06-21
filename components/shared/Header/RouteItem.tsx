import styles from "./Header.module.css";
import NextLink from "next/link";

export interface RouteItemProps {
    name: string;
    href: string;
    icon: JSX.Element;
}


export default function RouteItem(props: RouteItemProps) {

    const selectStyle = () => {
        let pathname = '';
        if (typeof window !== "undefined") {
            pathname = window.location.pathname;
        }
        if (pathname.includes(props.href))
            return styles.selectedItem;
        else
            return styles.item;
    }
    return <NextLink href={props.href}>
        <div className={selectStyle()}>
                <span className={styles.icon}>
                    {props.icon}
                </span>
            {props.name}
        </div>
    </NextLink>
}
