export class Meetup {
  public signUps: number = 0;

  constructor (
    public location: string,
    public time: string,
    public date: string,
    public messId: any,
    public messLocation: any
  ) { }
}
