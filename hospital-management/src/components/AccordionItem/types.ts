export interface IAccordionItem {
  id: string;
  title: string;
  text: string;
}

export interface IAccordionItemProps {
  className?: string;
  item: IAccordionItem;
}
