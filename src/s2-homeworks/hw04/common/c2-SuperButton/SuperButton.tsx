import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    // const getGeneralClass = (xType?: string, disabled?: boolean) => {
    //     if(disabled) {
    //         return s.disabled
    //     }
    //
    //     if(xType === 'red') {
    //         return s.red
    //     }
    //
    //     if(xType === 'secondary') {
    //         return s.secondary
    //     }
    //
    //     return ''
    // }
    //
    // const getFinalClass = (xType?: string, disabled?: boolean, className?: string) => {
    //     const generalClass = getGeneralClass(xType, disabled)
    //     return `${s.button} ${generalClass} ${className || ''}`
    // }

    const finalClassName = s.button
        + ' ' + (disabled ? s.disabled : xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default)
        + (className ? ' ' + className : '') // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            // className={getFinalClass(xType, disabled, className)}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
