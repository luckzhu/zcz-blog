import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import styles from './index.scss'

const render = () => {
  ReactDOM.render(
    <div className={styles.test}>
      123
      <Button type="primary">按钮</Button>
    </div>,
    document.querySelector('#app')
  )
}

render()