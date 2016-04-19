/**
 * Created by tzr4032369 on 2016/4/19.
 */


//���ִ�������¼�
document.getElementById('run').onclick = function(){
    var text = document.getElementById('order').value;
    runCommand(text);
}

//ִ������
function runCommand(text){
    var order = text.toLowerCase(); //���ݴ�Сд
    switch(order){
        case 'go':
           switch(active.direction){
               case 0:
                   if(active.row ==1){return;}
                   active.disappear();
                   active.row--;
                   active.show();
                   break;
               case 1:
                   if(active.col ==1){return;}
                   active.disappear();
                   active.col--;
                   active.show();
                   break;
               case 2:
                   if(active.row ==10){return;}
                   active.disappear();
                   active.row++;
                   active.show();
                   break;
               case 3:
                   if(active.col ==10){return;}
                   active.disappear();
                   active.col++;
                   active.show();
                   break;
               default :

           }
            break;
        case 'tun lef':
            active.turn(1);
            break;
        case 'tun rig':
            active.turn(3);
            break;
        case  'tun bac':
            active.turn(2);
            break;
        default :
    }
}

//��ڵ�activeNode
function activeNode(row,col){
    this.row = row;  //��
    this.col = col;  //��
    this.direction = 0;  //0���� 1���� 2���� 3����
    //��ȡ��ǰ��ڵ�DOM
    this.getDom = function(){
        return document.getElementsByTagName('td')[this.row*11+this.col];
    }
}

//��ʾ��ڵ�
activeNode.prototype.show = function(){
    var innerDom = document.createElement('div');
    innerDom.style.width = '100%';
    innerDom.style.height = '100%';
    innerDom.style.backgroundColor = '#00aaaa';
    innerDom.style.borderTop = '20px solid #bb66bb';
    innerDom.style.transform = "rotate(-"+this.direction*90+"deg)";
    this.getDom().appendChild(innerDom);

}

//��ʧ��ڵ�
activeNode.prototype.disappear = function(){
    this.getDom().removeChild(this.getDom().firstChild);
}

//��ת��ڵ�
/*param:
    directionNum:��ת����
*/
activeNode.prototype.turn = function(directionNum){
    var newDirection =this.direction+directionNum;
    this.getDom().firstChild.style.transform = "rotate(-"+newDirection*90+"deg)";
    this.direction = (this.direction+directionNum)%4;  //���½ڵ㵱ǰ����
}

//ʵ������ڵ�
var active = new activeNode(5,6);
active.show();