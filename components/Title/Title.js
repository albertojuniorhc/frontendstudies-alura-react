export const Title = ({children, theme, tag, ...props}) => {
    const Tag = tag || 'h1';
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