import classes from "./main.module.css"

interface Props {
    children?: React.ReactNode
}

export function Main(props: Props) {
    return <div className={classes.main}>{props.children}</div>
}
