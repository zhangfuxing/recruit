import React from 'react'
import {Switch} from 'antd'
import PropTypes from 'prop-types'

import styles from './common.less'

export default class Worktime extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }

  static defaultProps = {
    value: 0,
  }

  handleChange = value => {
    this.props.onChange(value ? 1 : 0)
  }

  render() {
    const {value} = this.props

    return (
      <div className={styles.schollLevel}>
        <span className={styles.schollLevelLabel}>211/985院校</span>
        <Switch
          checkedChildren="是"
          unCheckedChildren="否"
          onChange={this.handleChange}
          checked={value === 1}
        />
      </div>
    )
  }
}
