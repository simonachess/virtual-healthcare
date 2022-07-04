import classNames from 'classnames'

function Button(props) {

	const classes = classNames(
	"flex items-center justify-center whitespace-nowrap px-10 py-3 text-lg font-semibold",
	props.variant === "primary" && "bg-primary rounded-full text-default-50",
	props.variant === "secondary" && "bg-secondary border border-2 border-primary text-primary rounded-full",
	props.variant === "link" && "bg-transparent",
	props.variant === "icon" && "bg-transparent",
	props.hasShadow && "shadow-sm",
	props.disabled && "opacity-50 pointer-events-none"
	)

	const iconClasses = classNames(
		props.iconClassName,
	)

	return <button type={props.type || 'button'} onClick={props.onClick} disabled={props.disabled} className={classes} aria-label={props.ariaLabel}>
		{props.Icon &&
			<props.Icon className={iconClasses}/>
		}
		{ props.children &&
			<span>{props.children}</span>
		}
	</button>
}

export default Button
