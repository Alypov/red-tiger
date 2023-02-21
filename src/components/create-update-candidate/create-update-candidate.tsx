import { candidate, followUpResults } from '../../shared';
import { Input } from '../../ui';
import styles from './styles.module.scss';

type data = {
  candidateID?: string;
  control: any;
};

export const CreateUpdateCandidate = ({ candidateID, control }: data) => {
  return (
    <div className={styles.mainWrapper}>
      {candidateID ? <div>CANDIDATE ID: {candidateID}</div> : null}
      <Input control={control} name='name' />
      <Input control={control} name='contact' />
      <Input control={control} name='email' />
    </div>
  );
};
