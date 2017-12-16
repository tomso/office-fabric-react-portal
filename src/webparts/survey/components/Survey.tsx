import * as React from 'react';
import styles from './Survey.module.scss';
import { ISurveyProps } from './ISurveyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Header from './Header';
import Assignment from './Assignment';

export default class Survey extends React.Component<ISurveyProps, {}> {
  public render(): React.ReactElement<ISurveyProps> {
    return (
      <div className={ styles.survey }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
            <Header />
            <Assignment />
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
