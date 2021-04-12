using Microsoft.EntityFrameworkCore.Migrations;

namespace codefirstapproach.Migrations
{
    public partial class version6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemsId",
                table: "items",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "items",
                newName: "ItemsId");
        }
    }
}
