export const Label = ({children, theme, ...props}) => {
    return (
        <>
            <label {...props}>
                {children}
            </label>
            <style jsx>{`
                label {
                    color: ${theme.colors.neutrals['300']};
                }    
            `}</style>
        </>
    )
}