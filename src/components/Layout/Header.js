import React from 'react'
import {Menu} from 'antd'
import {withRouter, Link} from 'react-router-dom'
import logoUrl from 'images/logo.png'

import styles from './header.less'

const menuKeys = ['/talents/discover', '/talents/admin', '/positions']

const MyHeader = props => {
  const {location: {pathname}} = props
  const currentMenu = menuKeys.find(key => pathname.indexOf(key) > -1)
  const prefix = '/ent'
  return (
    <header className={styles.header}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[currentMenu]}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="logo">
          <Link to={`${prefix}/talents/discover`} activeclassname="active">
            <img className={styles.logo} src={logoUrl} alt="logo" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/positions">
          <Link to={`${prefix}/positions`} activeclassname="active">
            职位管理
          </Link>
        </Menu.Item>
        <Menu.Item key="/talents/discover">
          <Link
            to={`${prefix}/talents/discover/search`}
            activeclassname="active"
          >
            发现人才
          </Link>
        </Menu.Item>
        <Menu.Item key="/talents/admin">
          <Link
            to={`${prefix}/talents/admin/following`}
            activeclassname="active"
          >
            人才跟进
          </Link>
        </Menu.Item>
      </Menu>
    </header>
  )
}

export default withRouter(MyHeader)
