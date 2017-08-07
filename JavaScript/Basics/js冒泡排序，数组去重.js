<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
			
		<script type="text/javascript">
			/***冒泡排序法***/
			var arrSort = [20,30,10,40,0];
			function sortarr(arr){
			    for(i=0;i<arr.length-1;i++){//循环3次
			        for(j=0;j<arr.length-1-i;j++){//第一圈循环三次把最大值放到最后
			            if(arr[j]>arr[j+1]){//两两比较，最大值放到最后
			                var temp=arr[j];
			                arr[j]=arr[j+1];
			                arr[j+1]=temp;
			            }
			        }
			    }
			    return arr;
			}
			console.log(sortarr(arrSort));


			/***数组去重 第一种方法***/
			var arrRepeat = [1,1,2,21,3,4,5,5,4];
			var arrrepeats = [];//[arrRepeat[0]];
			for(var i = 0;i < arrRepeat.length;i++){//原数组
				var flag = false;
				for(var j=0;j<arrrepeats.length;j++){//去重后的数组
					if(arrRepeat[i] == arrrepeats[j]){//每次对比如果有重复跳出进行原数组下一次循环
						flag = true;
						break;
					}
				}
				if(!flag){
					arrrepeats.push(arrRepeat[i]);
				}
			}
			console.log(arrrepeats);


			/***数组去重 第二种方法***/
			var arrRepeat2 = [1,1,2,2,3,3,4,4,5,5];
			var jsonObj = {} , arrresult = [];
			for(var i=0;i<arrRepeat2.length;i++){
				if(!jsonObj[arrRepeat2[i]]){//判断json中是否已存在该对象，不存在则进入
					arrresult.push(arrRepeat2[i]);//加入去重后数组
					jsonObj[arrRepeat2[i]] = 1;//放入json对象中 ， 下次不再进入
				}
			}
			console.log(arrresult)
		</script>
	</body>
</html>
