import { StatisticsSection, Title, StatList, Item, Label, Percentage } from "./Statistics.styled"



export function Statistics({title, stats}) {

    return (<StatisticsSection>
        {title && <Title>{title}</Title>}
        <StatList>
            {stats.map(({ id, label, percentage }) => {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                return <Item key={id} bgColor={randomColor}>
                    <Label>{label}</Label>
                    <Percentage>{`${percentage}`}</Percentage>
                </Item>
            }) }
        </StatList>
    </StatisticsSection>)
}


