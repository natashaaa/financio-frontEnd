import { Component } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

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
    this.selectedRecord = record;
  }

  getRecords(): void {
    this.recordService.getRecords()
        .subscribe(records => this.records = records);
  }
}