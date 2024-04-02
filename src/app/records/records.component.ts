import { Component } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  selectedRecord?: Record;

  records: Record[] = [];

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.getRecords();
  }

  onSelect(record: Record): void {

    console.log(record);
    this.selectedRecord = record;
  }

  getRecords(): void {
    this.recordService.getRecords()
        .subscribe(records => this.records = records);

  }

  delete(record: Record): void {
    this.records = this.records.filter(r => r !== record);
    console.log('id', record.id);
    this.recordService.deleteRecord(record.id).subscribe(
      () => console.log('Record deleted successfully'),
      (error: HttpErrorResponse) => console.error('Error deleting record:', error)
    );
  }

}