import { Input } from '../../ui';
import styles from './styles.module.scss';

type data = {
  candidateID?: string;
  control: any;
  errors: any;
};

export const CreateUpdateCandidate = ({ candidateID, control, errors }: data) => {
  return (
    <div className={styles.mainWrapper}>
      {candidateID ? <div>CANDIDATE ID: {candidateID}</div> : null}
      <Input error={errors} control={control} name='name' />
      <Input error={errors} control={control} name='contact' />
      <Input error={errors} control={control} name='email' />
    </div>
  );
};
