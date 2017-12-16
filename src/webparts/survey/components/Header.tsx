import * as React from 'react';
import styles from './Survey.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Header extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (<div className={styles.header}>Heder text</div>);
  }
}