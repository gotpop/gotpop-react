import { IButtonIcon } from '@types'
import styles from './ButtonIcon.module.css'

const ButtonIcon = ({ content, doClick, icon, vars, ...rest }: IButtonIcon) => {
  const ButtonIcon = icon

  return (
    <button
      className={styles.button}
      onClick={doClick}
      style={vars}
      type="submit"
      {...rest}
    >
      <span>{content}</span>
      {ButtonIcon}
    </button>
  )
}

ButtonIcon.defaultProps = {
  content: 'Click',
  doClick: null,
  icon: null,
  vars: null
}

export default ButtonIcon
