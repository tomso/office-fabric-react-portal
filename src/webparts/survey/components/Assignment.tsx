import * as React from 'react';
import styles from './Survey.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Assigment extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (<div className={styles.assignment}>
    <div >
        image
    </div>
    <div className={styles.assignmentTitle}>MV Centurion -</div>
    <div className={styles.assignmetNumber}>170100/2016</div>
    <div>description....</div>
    <div className={styles.assigmentLocationWrapper}>
    <div className={styles.assigmnetLocationTitle}>Mitsui shipyard</div>
    <div className={styles.assingmentLocationDetails}>
    Tokoyo, Japan
    Departure 7 days
    </div>
    <div>
        15. March 2017
    </div>

    </div>
    </div>);
  }
}