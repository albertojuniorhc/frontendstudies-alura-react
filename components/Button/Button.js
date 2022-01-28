import { Button as ButtonUI } from '@skynexui/components';

export const Button = ({type, label, disabled, fullWidth, theme, ...props }) => {
    return (
        <ButtonUI
                type={type}
                label={label}
                disabled={disabled}
                fullWidth={fullWidth}
                buttonColors={{
                  contrastColor: theme.colors.neutrals["000"],
                  mainColor: theme.colors.primary[500],
                  mainColorLight: theme.colors.primary[400],
                  mainColorStrong: theme.colors.primary[600],
                }}
                {...props}
            />
    )
}