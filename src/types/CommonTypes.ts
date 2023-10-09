export interface INode {
  id: string;
  name: string;
  isEditing: boolean;
  level: number;
  children?: INode[];
}
