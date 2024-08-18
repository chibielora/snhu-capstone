const variantClassNames = {
    filled: "bg-purple-500 hover:bg-purple-400",
    outlined: "border-2 border-purple-500 hover:border-purple-400"
};

export default function Button({ variant = "filled", className, ...props }) {


    return (
        <button
            className={`
                ${variantClassNames[variant]}
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