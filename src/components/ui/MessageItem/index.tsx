import styles from "./index.module.scss";


interface IMessageItem {
    message:string,
    senderName:string|undefined
}
export default function MessageItem({message, senderName}:IMessageItem) {

    return (
        <li className={styles.messageBlock}>
            <p className={styles.name}>{senderName}</p>
            <p className={styles.message}>{message}</p>
        </li>
    )

}