const variantClassNames = {
    purple: {
        filled: "bg-purple-500 hover:bg-purple-400",
        outlined: "border-2 border-purple-500 hover:border-purple-400"
    },
    red: {
        filled: "bg-red-500 hover:bg-red-400",
        outlined: "border-2 border-red-500 hover:border-red-400"
    },
    green: {
        filled: "bg-green-500 hover:bg-green-400",
        outlined: "border-2 border-green-500 hover:border-green-400"
    }
};

export default function Button({
    variant = "filled",
    color = "purple",
    className = "",
    ...props
}) {
    return (
        <button
            className={`
                ${variantClassNames[color][variant]}
                shadow
                focus:shadow-outline
                focus:outline-none
                font-bold
                py-1
                px-6
                rounded
                ${className}
            `}
            {...props}
        />
    )
}