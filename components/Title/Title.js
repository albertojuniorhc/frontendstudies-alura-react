export const Title = ({children, theme, tag, ...props}) => {
    const Tag = tag || 'h1';
    // console.log(props)
    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
            ${Tag} {
            color: ${theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight: 600;
                }
            `}</style>
        </>
    );
} 
//${console.log(props.theme.theme.colors.neutrals['000'])}
//color: ${props.theme.theme.colors.neutrals['500']};