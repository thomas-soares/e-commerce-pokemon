import styles from '../styles/components/Modal.module.css';

export default function Modal() {

    return (
        <>
            <div className={styles.modal}>
                <p>Obrigado!!!</p>
                <p>Você ganhou de volta</p>
                <p>$ 10,00</p>
            </div>
        </>
    );
}