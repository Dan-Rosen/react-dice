import React, { Component } from 'react'

import styles from './Die.module.css'

class Die extends Component {
    render() {
        const { face, rolling } = this.props
        return (
            <i
                className={`${styles.Die} fas fa-dice-${face} ${
                    rolling && styles.DieRolling
                }`}
            />
        )
    }
}

export default Die
