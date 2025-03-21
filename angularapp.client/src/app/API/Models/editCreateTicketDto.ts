export class EditCreateTicketDto {
  title: string = '';
  id?: string;
  allReplies: string[] = [];
  status: string = '';
  type: string = '';
  module: string = '';
  urgentLvl: string = '';
  description: string = '';
  installedEnvironment: string = '';
}
