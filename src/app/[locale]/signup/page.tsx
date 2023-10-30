import styles from './SignupPage.module.scss';
import { SignupForm } from './components';


export default function SignupPage() {
    return (
        <section className={styles.section}>
            <h1>Inscription</h1>
            <SignupForm />
        </section>
    );
}
