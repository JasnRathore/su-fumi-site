interface ProductDialogParams {
	children: React.ReactNode
	onClick: any
}
export default function ProductDialog(params: ProductDialogParams) {
	return (
	<dialog open className="w-screen h-screen z-60 fixed">
		<button onClick={params.onClick}>CLose</button>
		{params.children}
			
	</dialog>
	)
}
