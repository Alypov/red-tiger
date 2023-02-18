import { candidate, followUpResults } from '../../shared';
import { Input } from '../../ui';
import styles from './styles.module.scss';

type data = {
  data: candidate;
};

export const CreateUpdateCandidate = ({ data }: data) => {
  const lastNote = data.followUpResults?.map((item: followUpResults) => item.result);
  return (
    <div className={styles.mainWrapper}>
      {data.id ? <div>CANDIDATE ID: {data.id}</div> : null}
      <Input name='name' defaultValue={data.name} />
      <Input name='contact' defaultValue={data.contact} />
      <Input name='email' defaultValue={data.email} />
      <Input name='notes' multiline defaultValue={lastNote} />
    </div>
  );
};
