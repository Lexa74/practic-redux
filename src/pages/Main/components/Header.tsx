interface HeaderPropsInput {
    setValue: (value: string) => void
}

interface HeaderPropOutput {
    value: string
}

type HeaderProps = HeaderPropsInput & HeaderPropOutput

export const Header = ({setValue, value}: HeaderProps) => {
    return <>
        <h1>Header</h1>
        <input
            type="text"
            onChange={e => setValue(e.target.value)}
            value={value}
        />
    </>
}