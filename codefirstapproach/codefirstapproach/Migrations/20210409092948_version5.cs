using Microsoft.EntityFrameworkCore.Migrations;

namespace codefirstapproach.Migrations
{
    public partial class version5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "items",
                newName: "ItemsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemsId",
                table: "items",
                newName: "Id");
        }
    }
}
