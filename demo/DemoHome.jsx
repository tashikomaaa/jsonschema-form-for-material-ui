import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from './menu';
import Body from './body';
import './main.scss'; // eslint-disable-line import/no-unresolved,import/no-extraneous-dependencies
import examples from './examples';

const styles = ({});

class Demo extends React.Component {
  state = {
    selectedDemo: examples.single,
  }

  onSelectMenuItem = type => () => {
    this.setState({ selectedDemo: type });
  }

  render() {
    const { classes } = this.props;
    const { selectedDemo } = this.state;
    return (
      <div className={classes.root}>
        <Menu onSelectMenuItem={this.onSelectMenuItem} />
        <Body selectedDemo={selectedDemo} />
      </div>
    );
  }
}

export default withStyles(styles)(Demo);
