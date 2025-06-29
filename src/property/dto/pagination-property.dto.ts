import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationPropertyDto {
  @IsNumber()
  @IsPositive() //验证是否为正数
  @IsOptional()
  pageIndex: number = 1;

  @IsPositive()
  @IsNumber()
  @IsOptional()
  pageSize: number = 5;
}
