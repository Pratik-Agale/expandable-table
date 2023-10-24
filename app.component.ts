import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'angular-tree-component';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.css']
})
export class ExpandableTableComponent implements OnInit {

  rows: TreeNode[] = [];

  constructor() { }

  ngOnInit() {
    // Fetch data from JSON file
    // ...

    // Create tree nodes
    this.rows = this.rows.map(row => {
      const children = row.children.map(child => {
        return new TreeNode({
          id: child.id,
          text1: child.text1,
          text2: child.text2,
          children: []
        });
      });

      return new TreeNode({
        id: row.id,
        text1: row.text1,
        text2: row.text2,
        children: children
      });
    });
  }

  selectRow(row: TreeNode) {
    // Change the row's background color
    row.element.nativeElement.style.backgroundColor = 'lightblue';

    // Check if the row has already been selected
    if (row.isSelected) {
      // Deselect the row
      row.deselect();
    } else {
      // Select the row
      row.select();
    }
  }

}

